import Deadline from '#models/deadline'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'


export default class extends BaseSeeder {
  async run() {
    await Deadline.createMany([
      {
        name:'asm 1',
        closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:1,
        description:'new deadline for asm1',
        
      },
      {
        name:'asm 1',
        closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:2,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
        closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:3,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:4,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:5,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:6,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:7,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:8,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:9,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:10,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:11,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:12,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:13,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:14,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:15,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:16,
        description:'new deadline for asm1',
        
      },    {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:17,
        description:'new deadline for asm1',
        
      }, {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:18,
        description:'new deadline for asm1',
        
      }, {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:19,
        description:'new deadline for asm1',
        
      }, {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:20,
        description:'new deadline for asm1',
        
      }, {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:21,
        description:'new deadline for asm1',
        
      }, {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:22,
        description:'new deadline for asm1',
        
      }, {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:23,
        description:'new deadline for asm1',
        
      }, {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:24,
        description:'new deadline for asm1',
        
      }, {
        name:'asm 1',
     closureDate: DateTime.now().plus({day:4}),
        finalclosureDate: DateTime.now().plus({day:14}),
        contributionId:25,
        description:'new deadline for asm1',
        
      },
    ])
  }
}