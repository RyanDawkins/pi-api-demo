import { PiPoint } from './pi-point.model';

export class PiElement {
    WebId: string;
    Id: string;
    Name: string;
    Path: string;
    TemplateName: string;
    HasChildren: boolean;
    CategoryNames: string[];
    Items: PiPoint[];
}