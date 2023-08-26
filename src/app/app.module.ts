import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CreateadvertisementComponent } from './createadvertisement/createadvertisement.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserByIdComponent } from './user-by-id/user-by-id.component';
import { MyadvertisementsComponent } from './myadvertisements/myadvertisements.component';
import { BuyComponent } from './buy/buy.component';
import { AdvertisementByIdComponent } from './advertisement-by-id/advertisement-by-id.component';
import { AlladvertisementsComponent } from './alladvertisements/alladvertisements.component';
import { AdvertisementByUserComponent } from './advertisement-by-user/advertisement-by-user.component';
import { AdvertisementByCategoryComponent } from './advertisement-by-category/advertisement-by-category.component';
import { AdvertisementByLocationComponent } from './advertisement-by-location/advertisement-by-location.component';
import { UpdateadvertisementComponent } from './updateadvertisement/updateadvertisement.component';
import { DeleteadvertisementComponent } from './deleteadvertisement/deleteadvertisement.component';
import { SaveuserComponent } from './saveuser/saveuser.component';
import { ExampleComponent } from './example/example.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserregistrationComponent,
    UserloginComponent,
    CreateadvertisementComponent,
    NavbarComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    UserHomeComponent,
    UserByIdComponent,
    MyadvertisementsComponent,
    BuyComponent,
    AdvertisementByIdComponent,
    AlladvertisementsComponent,
    AdvertisementByUserComponent,
    AdvertisementByCategoryComponent,
    AdvertisementByLocationComponent,
    UpdateadvertisementComponent,
    DeleteadvertisementComponent,
    SaveuserComponent,
    ExampleComponent,
    AboutusComponent,
    ContactusComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
