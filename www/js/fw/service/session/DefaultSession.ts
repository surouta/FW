import Session = require('fw/service/session/Session');

/**
 * 基本セッションクラス
 * @class DefaultSession
 * @implements {Session}
 */
class DefaultSession implements Session {
  
  /**
   * Creates an instance of DefaultSession.
   * 
   * @param {string} id セッション識別子
   */
  constructor(id:string){
    this.id = id;
    this.data = {};
  }
  
  /**
   * セッション識別子 
   * @type {string}
   */
  id: string;
  
  /**
   * セッションデータ
   * @type {{ [key: string]: any }}
   */
  data: { [key: string]: any };

  /**
   * 初期化処理
   * @returns {Q.Promise<Session>} 初期化されたセッションオブジェクト
   */
  initialize(): Q.Promise<Session> {
    var initializing: Q.Deferred<Session> = Q.defer<Session>();
    initializing.resolve(this);
    return initializing.promise;
  }

  /**
   *　終了処理 
   * @returns {Q.Promise<void>} void
   */
  finalize(): Q.Promise<void> {
    var finalizing: Q.Deferred<void> = Q.defer<void>();
    finalizing.resolve(null);
    return finalizing.promise;
  }
}