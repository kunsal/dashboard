export interface Project {
  name: string;
  startDate: Date;
  dueDate: Date;
  unit: string;
  manager: string;
  staff: string;
}

export const projects: Project[] = [
  {
    name: 'Fraud Assessment',
    startDate: new Date(2020, 7, 14),
    dueDate: new Date(2020, 8, 14),
    unit: 'Artificial Data',
    manager: 'Demi Madaro',
    staff: '4',
  },
  {
    name: 'Project Audit',
    startDate: new Date(2020, 7, 10),
    dueDate: new Date(2020, 8, 22),
    unit: 'Business Analytics',
    manager: 'Adele Olaluyi',
    staff: '3',
  },
  {
    name: 'Fintech Analytics',
    startDate: new Date(2020, 6, 4),
    dueDate: new Date(2020, 8, 28),
    unit: 'Business Analytics',
    manager: 'Adele Olaluyi',
    staff: '2',
  },

  {
    name: 'BC Website',
    startDate: new Date(2020, 7, 7),
    dueDate: new Date(2020, 9, 5),
    unit: 'Deep Consulting',
    manager: 'Bada Irine',
    staff: '1',
  },
  {
    name: 'Dump Workshop',
    startDate: new Date(2020, 6, 14),
    dueDate: new Date(2020, 9, 2),
    unit: 'Deep Consulting',
    manager: 'Bada Irine',
    staff: '6',
  },
  {
    name: 'Optimization Flow',
    startDate: new Date(2020, 7, 22),
    dueDate: new Date(2020, 8, 16),
    unit: 'Business Analytics',
    manager: 'Rachael Yemisi',
    staff: '3',
  },

  {
    name: 'Dump Workshop',
    startDate: new Date(2020, 6, 14),
    dueDate: new Date(2020, 8, 17),
    unit: 'Deep Consulting',
    manager: 'Bada Irine',
    staff: '5',
  },
];
