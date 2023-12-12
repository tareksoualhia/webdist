import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './back/header/header.component';
import { SidebarComponent } from './back/sidebar/sidebar.component';
import { HomeComponent } from './back/home/home.component';
import { FooterComponent } from './back/footer/footer.component';
import { ListtransportComponent } from './back/transport/listtransport/listtransport.component';
import { AddtransportComponent } from './back/transport/addtransport/addtransport.component';
import { EdittransportComponent } from './back/transport/edittransport/edittransport.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { SliderComponent } from './front/slider/slider.component';
import { SearchsectionComponent } from './front/searchsection/searchsection.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { FooterfrontComponent } from './front/footerfront/footerfront.component';
import { ListmaisonhoteComponent } from './back/maisonhote/listmaisonhote/listmaisonhote.component';
import { AddmaisonhoteComponent } from './back/maisonhote/addmaisonhote/addmaisonhote.component';
import { EditmaisonhoteComponent } from './back/maisonhote/editmaisonhote/editmaisonhote.component';
import { MaisonhoteComponent } from './front/maisonhote/maisonhote/maisonhote.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { DetailmaisonhoteComponent } from './front/maisonhote/detailmaisonhote/detailmaisonhote.component';
import { RegisterComponent } from './login/register/register.component';
import { AddoffreComponent } from './back/offre/addoffre/addoffre.component';
import { EditoffreComponent } from './back/offre/editoffre/editoffre.component';
import { AlloffreComponent } from './back/offre/alloffre/alloffre.component';
import { DetailoffreComponent } from './front/offre/detailoffre/detailoffre.component';
import { TransportComponent } from './front/transport/transport/transport.component';
import { TransportdetailComponent } from './front/transport/transportdetail/transportdetail.component';

import { FormBookingComponent } from './front/form-booking/form-booking.component';
import { ListBookingComponent } from './back/booking/list-booking/list-booking.component';
import { EditBookingComponent } from './back/booking/edit-booking/edit-booking.component';
import { AddHotelComponent } from './back/Hotel/add-hotel/add-hotel.component';
import { EditHotelComponent } from './back/Hotel/edit-hotel/edit-hotel.component';
import { ListHotelComponent } from './back/Hotel/list-hotel/list-hotel.component';
import { DetailHotelComponent } from './front/hotel/detail-hotel/detail-hotel.component';
import { HotelComponent } from './front/hotel/hotel/hotel.component';
;
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ListtransportComponent,
    AddtransportComponent,
    EdittransportComponent,
    LoginComponent,
    NavbarComponent,
    SliderComponent,
    SearchsectionComponent,
    AccueilComponent,
    FooterfrontComponent,
    ListmaisonhoteComponent,
    AddmaisonhoteComponent,
    EditmaisonhoteComponent,
    MaisonhoteComponent,
    DetailmaisonhoteComponent,
    RegisterComponent,
    AddoffreComponent,
    EditoffreComponent,
    AlloffreComponent,
    DetailoffreComponent,
    TransportComponent,
    TransportdetailComponent,
    
    FormBookingComponent,
    ListBookingComponent,
    EditBookingComponent,
    AddHotelComponent,
    EditHotelComponent,
    ListHotelComponent,
    DetailHotelComponent,
    HotelComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
