import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { ITransaction } from '@ng-test/shared/models';
import { TransactionsService } from '@ng-test/firebase';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'ng-test-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  transactions: ITransaction[] = [];
  id!: string;
  transaction!: ITransaction;

  dataSource = new MatTableDataSource<ITransaction>(this.transactions);

  displayedColumns: string[] = ['id', 'name', 'fromUser', 'toUser', 'descriptioj', 'spending'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private traService: TransactionsService, private modal: NgbModal, public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.traService.getTransaction().subscribe((res: ITransaction[]) => {
      this.transactions = res;
    });
    this.dataSource.paginator = this.paginator;
  }

  onEdit() {
    if (this.id)
      this.traService.getTransactionByID(this.id).subscribe(res => {
        this.transaction = res;
      });
  }

  onUpdate() {
    this.traService.updateTransaction(this.transaction).then(() => {
      this.activeModal.close();
      console.log('Data add successfully');
    })
  }
  setPrice(transaction: ITransaction, spending: number) {
    this.traService.modifySpending(transaction, spending)
  }

  deleteTransaction(transaction: ITransaction) {
    if (confirm("Are You sure you want to delete this record ?") == true) {
      this.traService.delTransaction(transaction).then(() => console.log("sucessfully deleted"));
    }
  }

  /*editModal(transaction: ITransaction) {
    const modalRef = this.modal.open(EditTransactComponent, {
      size: 'sm',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = transaction.id;
  }
  */
} 
