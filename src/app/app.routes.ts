import { Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { BodylivehubComponent } from './component/bodylivehub/bodylivehub.component';
import { RouterOutlet } from '@angular/router';
import { ElectricContactComponent } from './component/electric-contact/electric-contact.component';
import { ElectricWebComponent } from './component/electric-web/electric-web.component';
import { ElectricAssignComponent } from './component/electric-assign/electric-assign.component';
import { ChatbotComponent } from './component/chatbot/chatbot.component';
export const routes: Routes = [
    {
        path:'register', component:RegisterComponent
    },
    {
        path:'',component:BodylivehubComponent
    },
    {
        path:'bodylivehub',component:BodylivehubComponent  
    },
    {
        path:'electric-contact',component:ElectricContactComponent
    },
    {
        path:'electric-web',component:ElectricWebComponent
    },
    {
        path:'electric-assign',component:ElectricAssignComponent
    },
    {
        path:'chatbot',component:ChatbotComponent
    }
  
];
