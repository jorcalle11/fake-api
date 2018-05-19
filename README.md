# Fake Api

## Stack

* [Json Server](https://github.com/typicode/json-server)
* [Casual](https://github.com/boo1ean/casual)
* [Now](https://zeit.co/now)

## Demo

[https://fake-evercheck-api-gwwotgcoww.now.sh](https://fake-evercheck-api-gwwotgcoww.now.sh)

## Routes

```
GET /me
```

```json
{
  "id": 89,
  "firstName": "Norwood",
  "middleName": "Ettie",
  "lastName": "Paucek",
  "userName": "Jacey_Steuber",
  "role": "omnis",
  "email": "Hettinger.Sandy@Mireya.com",
  "applications": {
    "humanResources": true,
    "education": true,
    "credentialing": false
  }
}
```

```
GET /employees
GET /api/v1/users/:id/employees
```

```json
[
  {
    "id": 0,
    "firstName": "Wilhelmine",
    "middleName": "Demarco",
    "lastName": "Ledner",
    "fullName": "Wilhelmine Ledner",
    "number": 54,
    "active": false,
    "stateId": 29,
    "professionId": 35,
    "workgroupValues": 200,
    "email": "Jerry_Bahringer@Alex.us",
    "licenses": {
    "href": "/employees/0/licenses",
    "items": [
      {
        "id": 980,
        "employeeId": 160,
        "state": "Wyoming",
        "stateCode": "KY",
        "profession": "Quas quaerat blanditiis",
        "professionCode": "NOK",
        "number": "Lu519",
        "originalDate": "03-18-1981",
        "expirationDate": "03-08-2006",
        "label": "clearToWork",
        "status": "voluptatem",
        "href": "/licenses/980"
      },
      {
        "id": 650,
        "employeeId": 977,
        "state": "Montana",
        "stateCode": "OH",
        "profession": "Doloribus commodi",
        "professionCode": "BDT",
        "number": "yv-208",
        "originalDate": "08-23-1970",
        "expirationDate": "02-03-1987",
        "label": "warning",
        "status": "doloribus",
        "href": "/licenses/650"
      }
    ]
    },
    "href": "/employees/0"
  },
  ...
]
```

```
GET /employees/:id
GET /api/v1/users/:id/employees/:id
```

```json
{
  "id": 0,
  "firstName": "Wilhelmine",
  "middleName": "Demarco",
  "lastName": "Ledner",
  "fullName": "Wilhelmine Ledner",
  "number": 54,
  "active": false,
  "stateId": 29,
  "professionId": 35,
  "workgroupValues": 200,
  "email": "Jerry_Bahringer@Alex.us",
  "licenses": {
    "href": "/employees/0/licenses",
    "items": [
      {
        "id": 980,
        "employeeId": 160,
        "state": "Wyoming",
        "stateCode": "KY",
        "profession": "Quas quaerat blanditiis",
        "professionCode": "NOK",
        "number": "Lu519",
        "originalDate": "03-18-1981",
        "expirationDate": "03-08-2006",
        "label": "clearToWork",
        "status": "voluptatem",
        "href": "/licenses/980"
      },
      {
        "id": 650,
        "employeeId": 977,
        "state": "Montana",
        "stateCode": "OH",
        "profession": "Doloribus commodi",
        "professionCode": "BDT",
        "number": "yv-208",
        "originalDate": "08-23-1970",
        "expirationDate": "02-03-1987",
        "label": "warning",
        "status": "doloribus",
        "href": "/licenses/650"
      }
    ]
  },
  "href": "/employees/0"
}
```

```
GET /states
GET /api/v1/users/:id/states
GET /api/v1/users/:id/employees/states
```

```json
[
  {
    "id": 0,
    "code": "HI",
    "name": "Mississippi",
    "href": "/states0"
  },
  {
    "id": 1,
    "code": "AL",
    "name": "Illinois",
    "href": "/states1"
  },
  {
    "id": 2,
    "code": "SC",
    "name": "Arkansas",
    "href": "/states2"
  },
  ...
]
```

```
GET /professions
GET /api/v1/users/:id/professions
GET /api/v1/users/:id/employees/states/:id/professions
```

```json
[
  {
    "id": 0,
    "name": "Ea velit quo",
    "stateId": 35,
    "code": "NE",
    "boardId": 18,
    "licenseFormat": "^[0-9]{7}$",
    "formatExample": "B-66X",
    "href": "/professions/0"
  },
  {
    "id": 1,
    "name": "Ad vero ipsam",
    "stateId": 19,
    "code": "LA",
    "boardId": 12,
    "licenseFormat": "^[0-9]{7}$",
    "formatExample": "Bm-820",
    "href": "/professions/1"
  }
  ...
]
```

```
GET /licenses
GET /api/v1/users/:id/licenses
```

```json
[
  {
    "id": 418,
    "employeeId": 990,
    "state": "Maryland",
    "stateCode": "VA",
    "profession": "Reprehenderit occaecati",
    "professionCode": "RSD",
    "number": "Yo398",
    "originalDate": "01-15-2011",
    "expirationDate": "03-17-1983",
    "label": "warning",
    "status": "adipisci",
    "href": "/licenses/418"
  },
  {
    "id": 254,
    "employeeId": 383,
    "state": "Rhode Island",
    "stateCode": "MT",
    "profession": "Nisi tempora et",
    "professionCode": "VND",
    "number": "ay607",
    "originalDate": "10-10-1985",
    "expirationDate": "12-09-2008",
    "label": "warning",
    "status": "quaerat",
    "href": "/licenses/254"
  },
  ...
]
```

```
GET /workgroups
GET /api/v1/users/:id/workgroups
```

```json
[
  {
    "id": 0,
    "description": "Provident aliquid veniam",
    "excelColumn": "Br",
    "href": "/workgroups/0",
    "workgroupValues": "/workgroups/0/values"
  },
  {
    "id": 1,
    "description": "Qui consequatur sed",
    "excelColumn": "FBu",
    "href": "/workgroups/1",
    "workgroupValues": "/workgroups/1/values"
  }
  ...
]
```

```
GET /workgroupsValues
GET /api/v1/users/:id/workgroups/:id/values
```

```json
[
  {
    "id": 44,
    "workgroupId": 1,
    "description": "Aut assumenda repellat",
    "href": "/workgroupValues/44"
  },
  {
    "id": 104,
    "workgroupId": 2,
    "description": "Omnis ea quae",
    "href": "/workgroupValues/104"
  }
  ...
]
```
