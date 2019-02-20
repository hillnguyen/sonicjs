import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ContentTypesComponent } from "./components/content-types/content-types.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { ContentComponent } from "./components/content/content.component";
import { AdminSideMenuComponent } from "./components/admin-side-menu/admin-side-menu.component";
import { HomeComponent } from "./components/home/home.component";
import { FieldTypesComponent } from "./components/field-types/field-types.component";
import { SafePipe } from "./pipes/safe.pipe";
import { ContentTypeAddComponent } from "./components/content-types/content-type-add/content-type-add.component";
import { ContentTypeEditComponent } from "./components/content-types/content-type-edit/content-type-edit.component";
import { ContentTypeEditFieldsComponent } from "./components/content-types/content-type-edit-fields/content-type-edit-fields.component";
import { ContentTypeEditViewsComponent } from "./components/content-types/content-type-edit-views/content-type-edit-views.component";
import { ContentTypeEditPermissionsComponent } from "./components/content-types/content-type-edit-permissions/content-type-edit-permissions.component";
import { ContentTypeEditSettingsComponent } from "./components/content-types/content-type-edit-settings/content-type-edit-settings.component";
import { ContentTypeEditCreateInstanceComponent } from "./components/content-types/content-type-edit-create-instance/content-type-edit-create-instance.component";
import { FormsComponent } from "./components/forms/forms.component";
import { QuestionsComponent } from "./components/forms/questions/questions.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './components/pages/pages.component';
import { ContentTypeEditFieldComponent } from './components/content-types/content-type-edit-field/content-type-edit-field.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { MenuComponent } from './elements/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTypesComponent,
    ContentComponent,
    AdminSideMenuComponent,
    HomeComponent,
    FieldTypesComponent,
    SafePipe,
    ContentTypeEditComponent,
    ContentTypeEditFieldsComponent,
    ContentTypeEditViewsComponent,
    ContentTypeEditPermissionsComponent,
    ContentTypeEditSettingsComponent,
    ContentTypeEditCreateInstanceComponent,
    ContentTypeAddComponent,
    FormsComponent,
    QuestionsComponent,
    PagesComponent,
    ContentTypeEditFieldComponent,
    AsideMenuComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MenuComponent]
})
export class AppModule {}