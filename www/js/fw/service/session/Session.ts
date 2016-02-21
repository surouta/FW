/**
 * セッションインタフェース
 * @interface Session
 */
interface Session {
  
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
  initialize(): Q.Promise<Session>;

  /**
   *　終了処理 
   * @returns {Q.Promise<void>} void
   */
  finalize(): Q.Promise<void>;
}

export = Session;