import { ApplicationConfig } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
// import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
// import { provideStoreDevtools } from '@ngrx/store-devtools';
// import { productReducer } from './store/product.reducer';
// import { ProductEffects } from './store/product.effects';
// import { ProductService } from './services/product.service';

import { routes } from './app.routes';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { environment } from './environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withRouterConfig({
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload'
    })),
    provideHttpClient(),
    provideStore({ products: productReducer }),
    provideEffects(ProductEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !environment.production
    }),
    ProductService,
        provideAnimations()
  ]
};