import TemplateLoader = require('fw/service/loader/template/TemplateLoader');

/**
 * (description)
 * テンプレートファイル読み込みを行うクラス
 * 
 * @class BaseTemplateLoader
 * @implements {TemplateLoader}
 */
class BaseTemplateLoader implements TemplateLoader {

  /**
   * (description)
   * テンプレートファイルを読み込む
   * 
   * @param {string} templateFileName (description)
   * @returns {Q.Promise<string>} (description)
   */
  load(templateFileName: string): Q.Promise<string> {
    var loading: Q.Deferred<string> = Q.defer<string>();

    try {
      require(['text!' + templateFileName], (template: string) => {
        loading.resolve(template);
      })
    }
    catch(e){
      console.error(e);
      loading.reject('load template is failed. fileName:' + templateFileName);
    }
        
    return loading.promise;
  }

}
