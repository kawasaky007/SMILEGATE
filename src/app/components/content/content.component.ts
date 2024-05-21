import { Component } from "@angular/core";
import { faker } from "@faker-js/faker";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent {
  listCard: Array<any> = Array(50)
    .fill(9)
    .map((item) => {
      const urlImg = "/assets/img";
      return {
        ...item,
        img: `${urlImg}/img-${
          Math.floor(Math.random() * 2) === 0 ? "1" : "2"
        }.png`,
        name: faker.lorem.text(),
      };
    });
}
