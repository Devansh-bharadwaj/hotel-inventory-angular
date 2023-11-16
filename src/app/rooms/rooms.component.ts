import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Rooms, RoomList } from "./room";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = 'Yatrik Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  selectedRooms!: RoomList;
  title = "Room List";
  roomList: RoomList[] = []
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  rooms: Rooms = {
    totalRooms: 50,
    availableRooms: 20,
    bookedRooms: 25,
  }

  ngOnInit(): void {
    console.log(this.headerComponent)
    this.roomList = [{
      roomNumber: 1,
      roomType: "Single Room",
      amenities: "AC, Wifi, TV, Attach Bathroom",
      price: 2000,
      photos: "https://www.hotelmonterey.co.jp/upload_file/monhtyo/stay/sng_600_001.jpg",
      checkInTime: new Date('11-11-2023'),
      checkOutTime: new Date('12-11-2023'),
    },
    {
      roomNumber: 2,
      roomType: "Delux Room",
      amenities: "AC, Wifi, TV, Attach Bathroom",
      price: 3000,
      photos: "https://www.hotelmonterey.co.jp/upload_file/monhtyo/stay/sng_600_001.jpg",
      checkInTime: new Date('11-11-2023'),
      checkOutTime: new Date('11-11-2023'),
    },
    {
      roomNumber: 3,
      roomType: "Double Room",
      amenities: "AC, Wifi, TV, Attach Bathroom",
      price: 2000,
      photos: "https://www.hotelmonterey.co.jp/upload_file/monhtyo/stay/sng_600_001.jpg",
      checkInTime: new Date('11-11-2023'),
      checkOutTime: new Date('11-11-2023'),
    }]


  }


  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View"
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }
  selectRoom(room: RoomList) {
    // console.log(room)
    this.selectedRooms = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Super Room",
      amenities: "AC, Wifi, TV, Attach Bathroom",
      price: 3000,
      photos: "https://www.hotelmonterey.co.jp/upload_file/monhtyo/stay/sng_600_001.jpg",
      checkInTime: new Date('11-10-2023'),
      checkOutTime: new Date('11-10-2023'),
    }
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
