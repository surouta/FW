abstract class ApplicationBase {

   initialize():Q.Promise<void>{
     var initializing:Q.Deferred<void> = Q.defer<void>();
     initializing.resolve(null);
     $(document.body).append($('<div>').text('iniaaiasss'));
     return initializing.promise;
   }
  
}

export = ApplicationBase;