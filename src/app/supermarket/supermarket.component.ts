import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { ISupermarket } from '../supermarket';

@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.css']
})
export class SupermarketComponent implements OnInit {

  private unsubscribe$: Subject<any> = new Subject();
  public edit = false;
  public newButton = false;

  supermarkets = {};

  prodColumns: string[] = ["superMarketName",
                            "superMarketMainImage",
                            "superMarketAdditionalImages",
                            "street",
                            "number",
                            "district",
                            "zip",
                            "country",
                            "city",
                            "state",
                            "superMarketDescription",
                            "superMarketPhone"];

  supermarketId: string = '';
  superMarketName: string = '';
  superMarketMainImage: string = '';
  superMarketAdditionalImages: string = '';
  street: string = '';
  number: string = '';
  district: string = '';
  zip: string = '';
  country: string = '';
  city: string = '';
  state: string = '';
  superMarketDescription: string = '';
  superMarketPhone: string = '';

  constructor(private apiService: ApiService) {
    this.fncSupermarkets();
  }

  ngOnInit() {
    this.fncSupermarkets();
  }

  fncSupermarkets() {
    this.apiService.listaSupermarkets()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((data) => {
      this.supermarkets = data;
      console.log(this.supermarkets);
    });
  }

  editar(e: ISupermarket) {
    this.edit = !this.edit;
    this.supermarketId = e._id;
    this.superMarketName = e.superMarketName;
    this.superMarketMainImage = e.superMarketMainImage;
    this.superMarketAdditionalImages = e.superMarketMainImage;
    this.street = e.locationStreet;
    this.number = e.locationNumber;
    this.district = e.locationDistrict;
    this.zip = e.locationZip;
    this.country = e.locationCountry;
    this.city = e.locationCity;
    this.state = e.locationState;
    this.superMarketDescription = e.superMarketDescription;
    this.superMarketPhone = e.superMarketPhone;
    window.scrollTo(0, 0);
  }

  excluir(s: ISupermarket) {
    if(confirm('Deseja excluir o supermercado?')) {
      this.apiService.deleteSupermarket(s)
        .subscribe((dt) => {
          this.apiService.listaSupermarkets()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((data) => {
            this.supermarkets = data;
          });
        });
    }
  }

  fncNovo() {
    this.supermarketId = '';
    this.superMarketName = '';
    this.superMarketMainImage = '';
    this.superMarketAdditionalImages = '';
    this.street = '';
    this.number = '';
    this.district = '';
    this.zip = '';
    this.country = '';
    this.city = '';
    this.state = '';
    this.superMarketDescription = '';
    this.superMarketPhone = '';
  }

  saveSupermarket() {
    var newSupermarket = {
      _id: this.supermarketId,
      SUPERMARKETNAME: this.superMarketName,
      SUPERMARKETMAINIMAGE : this.superMarketMainImage,
      SUPERMARKETADDITIONALIMAGES: this.superMarketAdditionalImages,
      STREET: this.street,
      NUMBER: this.number,
      DISTRICT: this.district,
      ZIP: this.zip,
      COUNTRY: this.country,
      CITY: this.city,
      STATE: this.state,
      SUPERMARKETDESCRIPTION: (document.getElementById("superMarketDescription") as HTMLTextAreaElement).value,
      SUPERMARKETPHONE: (document.getElementById("superMarketPhone") as HTMLTextAreaElement).value
    };
    if(this.supermarketId != '') {
      this.apiService.editarSupermarket(newSupermarket)
      .subscribe((dt) => {
        this.apiService.listaSupermarkets()
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((data) => {
          this.supermarkets = data;
          this.fncNovo();
        });
      });
    } else {
      this.apiService.saveSupermarket(newSupermarket)
      .subscribe((dt) => {
        this.apiService.listaSupermarkets()
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((data) => {
          this.supermarkets = data;
          this.fncNovo();
        });
      });
    }
  }
}
