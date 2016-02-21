import Session = require('fw/service/session/Session')

/**
 * セッションマネージャーインタフェース
 * @interface SessionManager
 */
interface SessionManager {

  /**
   * 初期化処理
   * @returns {Q.Promise<SessionManager>} (description)
   */
  initialize():Q.Promise<SessionManager>;

  /**
   * 終了処理 
   * @returns {Q.Promise<void>} (description)
   */
  finalize():Q.Promise<void>;
  
  /**
   * セッションを開始する。
   * @returns {Q.Promise<Session>} 開始したセッション
   */
  startSession():Q.Promise<Session>;
  
  /**
   * セッションを終了する。
   * @returns {Q.Promise<void>} 
   */
  endSession():Q.Promise<void>;
  
  /**
   * 指定したセッションを取得する。
   * 
   * @param {string} id セッション識別子
   * @returns {Q.Promise<Session>} 識別子で指定したセッション
   */
  getSession(id:string):Q.Promise<Session>;
  
}

export = SessionManager;