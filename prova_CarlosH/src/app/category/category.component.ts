import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categorias';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  newCategory : Categoria = {} as Categoria

  categoryList: Categoria[] = []
  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.loadData
  }

  loadData(){
    this.service.getCategorias().subscribe(
      items => this.categoryList = items)
  }

  saveData(form: NgForm) {
      this.service.createCategorias(this.newCategory).subscribe(item => {
        form.resetForm()
        this.newCategory = {} as Categoria
        this.loadData()
      })

  }



}
