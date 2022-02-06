const sportsmans = [
  {
    startNumber: 12,
    name: 'Рыбаков Александр',
    ageGroup: 'M35-39',
    gender: 'male',
    finishTime: 1212
  },
  {
    startNumber: 9,
    name: 'Иван Земцов',
    ageGroup: 'M50-54',
    gender: 'male',
    finishTime: 1580
  },
  {
    startNumber: 3,
    name: 'Семёнов Дмитрий',
    ageGroup: 'M30-34',
    gender: 'male',
    finishTime: 1202
  },
  {
    startNumber: 6,
    name: 'Федякова Надежда',
    ageGroup: 'Ж40-44',
    gender: 'female',
    finishTime: 1700
  },
  {
    startNumber: 11,
    name: 'Кириллова Эмма',
    ageGroup: 'M45-49',
    gender: 'female',
    finishTime: 1600
  },
  {
    startNumber: 10,
    name: 'Плотников Сергей',
    ageGroup: 'M30-34',
    gender: 'male',
    finishTime: 1403
  },
  {
    startNumber: 2,
    name: 'Федяков Александр',
    ageGroup: 'M40-44',
    gender: 'male',
    finishTime: 1378
  }
]

const sortByTime = function(sportsmans) {
  for (i = 0; i < sportsmans.length - 1; i++) {
    for (j = i + 1; j < sportsmans.length; j++) {
      if (sportsmans[j].finishTime < sportsmans[i].finishTime) {
        const swap = sportsmans[i]
        sportsmans[i] = sportsmans[j]
        sportsmans[j] = swap
      } 
    }
  }
}

const fillResultsTable = function(sportsmans) {
  const resultsTable = document.querySelector('.results-table')
  for (i = 0; i < sportsmans.length; i++) {
    const newRow = createRowResultsTable(sportsmans[i], i)
    newRow.classList.add('sportsman')
    resultsTable.appendChild(newRow)
  }
}

// const createCeil = function(sportsmanProperty) в функции ниже много повторений - заменить на функцию?

const createRowResultsTable = function(sportsman, rang) {
  let tableRow = document.createElement('tr')
  
  const startNumber = document.createElement('td')
  startNumber.textContent = sportsman.startNumber
  tableRow.appendChild(startNumber)

  const name = document.createElement('td')
  name.textContent = sportsman.name
  tableRow.appendChild(name)

  const ageGroup = document.createElement('td')
  ageGroup.textContent = sportsman.ageGroup
  tableRow.appendChild(ageGroup)

  const gender = document.createElement('td')
  gender.textContent = sportsman.gender
  tableRow.appendChild(gender)

  const finishTime = document.createElement('td')
  const seconds = sportsman.finishTime % 60 < 10 ? '0' + sportsman.finishTime % 60 : sportsman.finishTime % 60
  finishTime.textContent = Math.floor(sportsman.finishTime / 60) + ':' + seconds 
  tableRow.appendChild(finishTime)

  const position = document.createElement('td')
  position.textContent = rang + 1
  tableRow.appendChild(position)

  return tableRow
} 

const resultsFilter = document.querySelector('#results-filter')
let sportsmansFiltered = []

sortByTime(sportsmans)
fillResultsTable(sportsmans)


resultsFilter.addEventListener('change', function () {
  if (this.value === 'all') {
    sportsmansFiltered = sportsmans
  } else {
    sportsmansFiltered = sportsmans.filter(sportsman => sportsman.gender === this.value)
  } 
  document.querySelectorAll('.sportsman').forEach(row => row.remove())
  fillResultsTable(sportsmansFiltered)
})  



