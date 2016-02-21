import Component = require('fw/component/component/Component')

/**
 * Componentオブジェクトの振る舞いを定義するインタフェース
 * @interface Behaviour
 * @template T
 */
interface Behaviour<T extends Component> {
  
  /**
   * コンポーネント描画処理
   * @returns {Q.Promise<T>} 描画が完了したコンポーネントオブジェクト
   */
  render():Q.Promise<T>;

  /**
   * コンポーネント初期化処理
   * @returns {Q.Promise<T>} 初期化が完了したコンポーネントオブジェクト
   */
  initialize():Q.Promise<T>;

  /**
   * コンポーネント終了処理
   * @returns {Q.Promise<T>} 終了処理が完了したコンポーネントオブジェクト
   */
  finalize():Q.Promise<T>;
}

export = Behaviour;