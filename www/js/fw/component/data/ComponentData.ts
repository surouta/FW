import NotifiableObject = require('fw/object/NotifiableObject');
import Component = require('fw/component/component/Component');

abstract class ComponentData<T extends Component> extends NotifiableObject{
  
  protected component :T;
  
  constructor(component:T, attribute:{[attributeName:string]:any} = {}){
    super(attribute);
    this.component = component;
    
  }
  
  initialize():Q.Promise<ComponentData<T>>{
    var initializing:Q.Deferred<ComponentData<T>> = Q.defer<ComponentData<T>>();
    this.context = this.component.element;    
    return initializing.promise;
  }
  
}

export = ComponentData;