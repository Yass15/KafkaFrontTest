import { NotifService } from '../services/notif.service';
import { Component, OnInit } from '@angular/core';
import * as Kafka from 'kafka-node';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name!: string;
  email!: string;
  constructor(private NotifService:NotifService) { }

  ngOnInit(): void {
    const client = new Kafka.KafkaClient({
      kafkaHost: 'localhost:9092'
    });

    const consumer = new Kafka.Consumer(client, 
      [{ topic: 'simpletalk_topic' }], 
      {
      autoCommit: false,
      fetchMaxWaitMs: 1000,
      fetchMaxBytes: 1024 * 1024,
      }
    );

    consumer.on('message', (message) => {
      console.log(message.value);
    });
  }

  submitForm() {
    console.log(this.name, this.email);
    console.log(typeof this.name,typeof this.email);
    // Add logic to submit form data here
    this.NotifService.showNotif(this.name);
  }

}
