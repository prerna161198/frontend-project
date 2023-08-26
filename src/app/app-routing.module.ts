import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainContentComponent } from './main-content/main-content.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserByIdComponent } from './user-by-id/user-by-id.component';
import { MyadvertisementsComponent } from './myadvertisements/myadvertisements.component';
import { BuyComponent } from './buy/buy.component';
import { AlladvertisementsComponent } from './alladvertisements/alladvertisements.component';
import { AdvertisementByIdComponent } from './advertisement-by-id/advertisement-by-id.component';
import { AdvertisementByUserComponent } from './advertisement-by-user/advertisement-by-user.component';
import { AdvertisementByCategoryComponent } from './advertisement-by-category/advertisement-by-category.component';
import { AdvertisementByLocationComponent } from './advertisement-by-location/advertisement-by-location.component';
import { UpdateadvertisementComponent } from './updateadvertisement/updateadvertisement.component';
import { DeleteadvertisementComponent } from './deleteadvertisement/deleteadvertisement.component';
import { CreateadvertisementComponent } from './createadvertisement/createadvertisement.component';
import { SaveuserComponent } from './saveuser/saveuser.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'',component:MainContentComponent},
  {path:'home',component:MainContentComponent},
  {path:'register', component:UserregistrationComponent},
  {path:'login', component:UserloginComponent},
  {path:'user', component:UserHomeComponent},
  {path:'profile', component:UserByIdComponent},
  {path:'MyAdvertisements',component:MyadvertisementsComponent },
  {path:'buy',component:BuyComponent },
  {path:'alladvertisements',component:AlladvertisementsComponent },
  {path:'advertisementById',component:AdvertisementByIdComponent },
  {path:'advertisementByUser',component:AdvertisementByUserComponent},
  {path:'advertisementByCategory',component:AdvertisementByCategoryComponent},
  {path:'advertisementByLocation',component:AdvertisementByLocationComponent},
  {path:'updateadvertisement',component:UpdateadvertisementComponent},
  {path:'deleteadvertisement',component:DeleteadvertisementComponent},
  {path:'sell',component:CreateadvertisementComponent},
  {path:'saveuser',component:SaveuserComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
