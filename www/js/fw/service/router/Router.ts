/**
 * ページ遷移をコントロールするルーターインタフェース
 * @interface Router
 */
interface Router {
  
  /**
   * 初期化処理
   * @returns {Q.Promise<void>}
   */
  initialize(): Q.Promise<void>;
  
  /**
   * ルーティング開始
   * @returns {Q.Promise<void>} (description)
   */
  start(): Q.Promise<void>;
    
  /**
   * ページ遷移処理 
   * @param {string} id ページ識別子
   * @param {{ [key: string]: any }} parameter ページ遷移パラメータ
   * @returns {Q.Promise<void>} ページ遷移完了
   */
  navigate(id: string, parameter: { [key: string]: any }): Q.Promise<void>;
 
  /**
   * 戻る処理 
   * @returns {Q.Promise<void>} ページ遷移完了
   */
  back(): Q.Promise<void>;
}

export = Router;