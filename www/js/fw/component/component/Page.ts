import Component = require('fw/component/component/Component');
import PageData = require('fw/component/data/PageData')

abstract class Page extends Component{
  
  protected attribute:PageData<Page>;
}

export = Page;