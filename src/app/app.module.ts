import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './store/counter.reducer';
import { booksReducer } from './store/books/books.redcer';
import { collectionReducer } from './store/books/collectionBook.reducer';

// Angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';

// Coponent
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ThreeComponent } from './component/three/three.component';
import { FourComponent } from './component/four/four.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookCollectionComponent } from './component/four/book-collection/book-collection.component';
import { BookListComponent } from './component/four/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleBooksServices } from './services/book-list.service';
import { NavComponent } from './component/nav/nav.component';
import { ModalComponent } from './component/modal/modal.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

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
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    FormsModule,
    StoreModule.forRoot({ 
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    }),
    HttpClientModule
  ],
  providers: [GoogleBooksServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
