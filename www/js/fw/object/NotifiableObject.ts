import EventDefine = require('fw/define/EventDefine');

interface BeforeChangeDetail {
  current: any;
  set: any;
  attributeName: string;
  target: NotifiableObject;
}

interface AfterChangeDetail {
  current: any;
  before: any;
  attributeName: string;
  target: NotifiableObject;
}

interface CancelChangeDetail {
  canceled: any;
  current: any;
  attributeName: string;
  target: NotifiableObject;
}

/**
 * 属性の変更を通知するクラス
 */
class NotifiableObject {

  private attr: { [attributeName: string]: any };
  protected context: EventTarget;

  constructor(data: { [attributeName: string]: any } = {}) {
    this.attr = data;
    this.context = document.createElement('div');
  }

  set(attributeName: string, value: any): void {
    var before: any = this.get(attributeName);
    var after: any = value;
    if (before != after) {
      this.triggerBeforeChange(attributeName, after, before);
    }
    this.attr[attributeName] = value;
    if (before != after) {
      this.triggerOnChange(attributeName, after, before);
    }
  }

  get(attributeName: string): any {
    var ret = this.attr[attributeName];
    if (ret == void 0) {
      return null;
    }
    return ret;
  }

  private triggerBeforeChange(attributeName: string, set: any, current: any) {
    var eventData: BeforeChangeDetail = {
      set: set,
      current: current,
      attributeName: attributeName,
      target: this
    }
    var event = new CustomEvent(EventDefine.BEFORE_CHANGE_ATTRIBUTE, { detail: eventData });
    this.context.dispatchEvent(event);
  }

  onBeforeChange(eventName: string, listner: (attributeName?: string, current?: any, set?: void) => any): NotifiableObject {
    this.context.addEventListener(EventDefine.BEFORE_CHANGE_ATTRIBUTE, (event: CustomEvent) => {
      var eventData: BeforeChangeDetail = event.detail;
      listner(eventData.attributeName, eventData.current, eventData.set);
    })
    return this;
  }

  private triggerOnChange(attributeName: string, current: any, before: any) {
    var eventData: AfterChangeDetail = {
      current: current,
      before: before,
      attributeName: attributeName,
      target: this
    }
    var event = new CustomEvent(EventDefine.BEFORE_CHANGE_ATTRIBUTE, { detail: eventData });
    this.context.dispatchEvent(event);
  }

  onChange(eventName: string, listner: (attributeName?: string, current?: any, before?: void) => any): NotifiableObject {
    this.context.addEventListener(EventDefine.AFTER_CHANGE_ATTRIBUTE, (event: CustomEvent) => {
      var eventData: AfterChangeDetail = event.detail;
      listner(eventData.attributeName, eventData.current, eventData.before);
    })
    return this;
  }
}

export = NotifiableObject;