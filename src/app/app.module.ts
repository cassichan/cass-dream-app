import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerControlComponent } from './server-control/server-control.component';
import { GameControlComponent } from './game/game-control/game-control.component';
import { GameOddComponent } from './game/game-odd/game-odd.component';
import { GameEvenComponent } from './game/game-even/game-even.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DetailsComponent,
    ServerElementComponent,
    ServerControlComponent,
    GameControlComponent,
    GameOddComponent,
    GameEvenComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
