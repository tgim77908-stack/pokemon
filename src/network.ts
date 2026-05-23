import Peer, { DataConnection } from 'peerjs';
import { NetworkMessage } from './types';

export class PokeChampsNetwork {
  private peer: Peer | null = null;
  private connection: DataConnection | null = null;
  private onOpenCallback?: (id: string) => void;
  private onConnectedCallback?: () => void;
  private onDataCallback?: (msg: NetworkMessage) => void;
  private onDisconnectCallback?: () => void;
  private onErrorCallback?: (err: Error) => void;

  constructor(callbacks: {
    onOpen?: (id: string) => void;
    onConnected?: () => void;
    onData?: (msg: NetworkMessage) => void;
    onDisconnect?: () => void;
    onError?: (err: Error) => void;
  }) {
    this.onOpenCallback = callbacks.onOpen;
    this.onConnectedCallback = callbacks.onConnected;
    this.onDataCallback = callbacks.onData;
    this.onDisconnectCallback = callbacks.onDisconnect;
    this.onErrorCallback = callbacks.onError;
  }

  createHost() {
    this.destroy();
    
    this.peer = new Peer({
      debug: 1
    });

    this.peer.on('open', (id) => {
      this.onOpenCallback?.(id);
    });

    this.peer.on('connection', (conn) => {
      this.connection = conn;
      this.setupConnection(conn);
    });

    this.peer.on('error', (err) => {
      this.onErrorCallback?.(err);
    });
  }

  connectToHost(hostId: string) {
    this.destroy();

    this.peer = new Peer({
      debug: 1
    });

    this.peer.on('open', (id) => {
      this.onOpenCallback?.(id);
      
      const conn = this.peer!.connect(hostId, {
        reliable: true
      });
      this.connection = conn;
      this.setupConnection(conn);
    });

    this.peer.on('error', (err) => {
      this.onErrorCallback?.(err);
    });
  }

  private setupConnection(conn: DataConnection) {
    conn.on('open', () => {
      this.onConnectedCallback?.();
    });

    conn.on('data', (data) => {
      this.onDataCallback?.(data as NetworkMessage);
    });

    conn.on('close', () => {
      this.onDisconnectCallback?.();
    });

    conn.on('error', (err) => {
      this.onErrorCallback?.(err);
    });
  }

  send(msg: NetworkMessage) {
    if (this.connection && this.connection.open) {
      this.connection.send(msg);
    } else {
      console.warn('Cannot send: connection is not open');
    }
  }

  isConnected() {
    return !!(this.connection && this.connection.open);
  }

  destroy() {
    if (this.connection) {
      this.connection.close();
      this.connection = null;
    }
    if (this.peer) {
      this.peer.destroy();
      this.peer = null;
    }
  }
}
