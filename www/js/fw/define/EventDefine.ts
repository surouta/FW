/**
 * イベント関連定数定義
 */
namespace EventDefine {
  /** 属性変更要求検知イベント */
  export const BEFORE_CHANGE_ATTRIBUTE = 'before:change:attribute';
  /** 属性変更完了イベント */
  export const AFTER_CHANGE_ATTRIBUTE = 'after:change:attribute';
  /** 属性変更キャンセルイベント */
  export const CANCEL_CHANGE_ATTRIBUTE = 'cancel:change:attribute';
}

export = EventDefine;