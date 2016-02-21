
/** テンプレートファイル読み込みインタフェース */
interface TemplateLoader {
  /**
   * テンプレートを読み込む
   * @param templateName テンプレートファイル名
   */
  load(templateName:string):Q.Promise<string>;
}

export = TemplateLoader;