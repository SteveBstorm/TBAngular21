import { Component, Input, OnInit } from '@angular/core';
import { LogService } from '../demo/components/log.service';
import { Link } from '../shared/models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() listeLien : Link[] = []

  userName : string = ""

  behaviorUserName : string = ""

  constructor(
    private session : LogService
  ) { }

  ngOnInit(): void {
    this.session.userNameSubject.subscribe((value : string) => this.userName = value)
    this.session.behavionUserName.subscribe((value : string) => this.behaviorUserName = value)
  }

  toggleVisible(index : number) {
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible 
  }

}
