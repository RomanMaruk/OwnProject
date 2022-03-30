import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


// Angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

// Modules
import { MedlinModule } from './medlin/medlin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// State
import { counterReducer } from './store/counter.reducer';
import { booksReducer } from './store/books/books.redcer';
import { collectionReducer } from './store/books/collectionBook.reducer';
import { AnimalsState } from './store/Zoo/zoo.state';
import { GoogleBooksServices } from './services/book-list.service';

// Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ThreeComponent } from './component/zoo/three.component';
import { FourComponent } from './component/four/four.component';
import { BookCollectionComponent } from './component/four/book-collection/book-collection.component';
import { BookListComponent } from './component/four/book-list/book-list.component';
import { NavComponent } from './component/nav/nav.component';
import { ModalComponent } from './component/modal/modal.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { ForNodeComponent } from './component/for-node/for-node.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DesignutilityService } from './services/NgxsPractica/sesignutility-service.service';
import { EditUsersState } from './store/editUser/editUser.state';
import { CreateUsersState } from './store/createUsers/createUsers.state';
import { appState } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FirstComponent,
    SecondComponent,
    ThreeComponent,
    FourComponent,
    BookCollectionComponent,
    BookListComponent,
    NavComponent,
    ModalComponent,
    ToolbarComponent,
    SideNavComponent,
    ForNodeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    MedlinModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxsModule.forRoot(appState, {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    StoreModule.forRoot({ 
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    }),
    HttpClientModule
  ],
  providers: [GoogleBooksServices, DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
