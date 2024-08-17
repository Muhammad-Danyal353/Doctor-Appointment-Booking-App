export class Hospital {
  hospitalId: number;
  hospitalName: string;
  hospitalAddress: string;
  hospitalCity: string;
  hospitalContactNo: string;
  hospitalOwnerName: string;
  hospitalOwnerContactNo: string;
  hospitalEmailId: string;
  userName: string;
  password: string;

  constructor() {
    this.hospitalId = 0;
    this.hospitalName = '';
    this.hospitalAddress = '';
    this.hospitalCity = '';
    this.hospitalContactNo = '';
    this.hospitalOwnerName = '';
    this.hospitalOwnerContactNo = '';
    this.hospitalEmailId = '';
    this.userName = '';
    this.password = '';
  }
}

export class User {
  constructor(public userName = '', public password = '') {}
}
export interface IHospital {
  hospitalId: number;
  hospitalName: string;
  hospitalAddress: string;
  hospitalCity: string;
  hospitalContactNo: string;
  hospitalOwnerName: string;
  hospitalOwnerContactNo: string;
  hospitalEmailId: string;
  userName: string;
  password: string;
}

export interface IApiResponese {
  message: string;
  result: boolean;
  data: any;
}

export class Appointments {
  constructor(
    public name: string = '',
    public mobileNo: number = 0,
    public city: string = '',
    public age: number = 0,
    public gender: string = '',
    public appointmentDate = new Date(),
    public appointmentTime = '',
    public isFirstVisit = false,
    public naration = '',
    public hospitalId = 0,
    public hospitalName = ''
  ) {}
}
export class Patients {
  constructor(
    public name: string = '',
    public mobileNo: number = 0,
    public city: string = '',
    public age: number = 0,
    public gender: string = '',
    public hospitalId = 0,
    public hospitalName = ''
  ) {}
}
