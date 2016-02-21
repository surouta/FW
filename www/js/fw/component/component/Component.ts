import ComponentData = require('fw/component/data/ComponentData')

/**
 * 画面構成要素となるコンポーネントクラス
 * 
 * @class Component
 */
class Component {


  /**
   * コンポーネントのDOM要素のJQueryオブジェクト
   * 
   * @protected
   * @type {JQuery}
   */
  protected _$element: JQuery;
  
  /**
   * コンポーネントのデータ
   * @protected
   * @type {ComponentData<Component>}
   */
  protected attribute:ComponentData<Component>;

  /**
   * Creates an instance of Component.
   */
  constructor() {
    
  }

  /**
   * コンポーネントのDOM要素
   * 
   * @readonly
   * @type {HTMLElement}
   */
  get element(): HTMLElement {
    if (this._$element) {
      return this._$element.get(0);
    }
    else {
      return null;
    }
  }
  
  /**
   * コンポーネントのDOM要素のJQueryオブジェクト
   * 
   * @readonly
   * @type {JQuery}
   */
  get $element():JQuery{
    if (this._$element){
      return this._$element;
    }
    else {
      return null;
    }
  }
}

export = Component;