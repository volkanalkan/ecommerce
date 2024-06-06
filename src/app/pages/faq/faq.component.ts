import { Component, OnInit } from '@angular/core';
import { FAQService } from '../../services/faq.service';
import { FAQ } from '../../models/faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FAQComponent implements OnInit {
  faqs: FAQ[] = [];

  constructor(private faqService: FAQService) {}

  ngOnInit(): void {
    this.faqService.getFAQs().subscribe((data) => {
      this.faqs = data;
    });
  }
}
