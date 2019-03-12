<template>
  <main-layout>
  <div id="app">
    <router-view/>
    <div class="main-class">
      <div class="filter">
        <div class="filter__block">
          <h3 class="filter-block__title">Sort by sex</h3>
          <div class="filter-block__checkbox">
            <div>
              <label v-if="femaleNum.length != 0">
                <input type="checkbox" id='female' value="female" v-model="gender" @change="filterMale">Female {{femaleNum.length}}
              </label>
            </div>
            <div>
              <label v-if="maleNum.length != 0">
                <input type="checkbox" id='male' value="male" v-model="gender" @change="filterMale">Male {{maleNum.length}}
              </label>
            </div>
          </div>
        </div>
        <div class="filter__block">
          <h3 class="filter-block__title">Sort by department</h3>
          <div class="filter-block__checkbox">
            <div>
              <label v-if="backendNum.length != 0">
                <input type="checkbox" value="Backend" v-model="department" @change="filterMale">Backend {{backendNum.length}}
              </label>
            </div>
            <div>
              <label v-if="frontendNum.length != 0">
                <input type="checkbox" value="Frontend" v-model="department" @change="filterMale">Frontend {{frontendNum.length}}
              </label>
            </div>
            <div>
              <label v-if="hrNum.length != 0">
                <input type="checkbox" value="Hr" v-model="department" @change="filterMale">Hr {{hrNum.length}}
              </label>
            </div>
          </div>
          <!--<span>{{department}}</span>-->
        </div>
        <div class="filter__block">
          <h3 class="filter-block__title">Sort by address</h3>
          <div class="filter-block__checkbox">
            <div>
              <label v-if="moscowNum.length != 0">
                <input type="checkbox" value="Moscow" v-model="address" @change="filterMale">Moscow {{moscowNum.length}}
              </label>
            </div>
            <div>
              <label v-if="newyorkNum.length != 0">
                <input type="checkbox" value="New-York" v-model="address" @change="filterMale">New-York {{newyorkNum.length}}
              </label>
            </div>
              <label v-if="voronezhNum.length != 0">
                <input type="checkbox" value="Voronezh" v-model="address" @change="filterMale">Voronezh {{voronezhNum.length}}
              </label>
            <div>
              <label v-if="spbNum.length != 0">
                <input type="checkbox" value="Spb" v-model="address" @change="filterMale">Spb {{spbNum.length}}
              </label>
            </div>
          </div>
          <!--<span>{{address}}</span>-->
        </div>
      </div>
      <div class="table">
        <table border="1">
          <tr>
            <th @click="sortName">Name</th>
            <th @click="sortAge">Age</th>
            <th @click="sortGender">Gender</th>
            <th @click="sortDepartment">Department</th>
            <th @click="sortAddress">Address</th>
          </tr>
          <tr
            v-for="people in peoplesFilter"
            :key="people.id"
          >
            <th>{{people["name"]}}</th>
            <th>{{people["age"]}}</th>
            <th>{{people["gender"]}}</th>
            <th>{{people["department"]}}</th>
            <th>{{people["address"]["city"]}}, {{people["address"]["street"]}}</th>
          </tr>
        </table>
      </div>
    </div>
  </div>
    <!--<button @click="filterMale(gender, department, address, peoplesFilter)">filterMale</button>-->
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
export default {
  name: 'Sheggi',
  components: {MainLayout},
  data () {
    return {
      peoples: [],
      peoplesFilter: [],
      gender: [],
      department: [],
      address: [],
      femaleNum: [],
      maleNum: [],
      backendNum: [],
      frontendNum: [],
      hrNum: [],
      moscowNum: [],
      newyorkNum: [],
      voronezhNum: [],
      spbNum: [],
      numbName: 0,
      numbAge: 0,
      numbGender: 0,
      numbDepartment: 0,
      numbAddress: 0
    }
  },
  computed: {
  },
  methods: {
    filterMale () {
      let first = []
      let second = []
      let third = []
      this.femaleNum = []
      this.maleNum = []
      this.backendNum = []
      this.frontendNum = []
      this.hrNum = []
      this.moscowNum = []
      this.newyorkNum = []
      this.voronezhNum = []
      this.spbNum = []
      // Определение количества человек
      this.peoples.forEach(item => {
        if (item.gender === this.gender[0]) {
          first.push(item)
          this.peoplesFilter = first
        } else if (this.gender[0] === undefined) {
          first.push(item)
          this.peoplesFilter = first
        }
      })
      // Определение пола
      first.forEach(item => {
        if (item.gender === 'female') {
          this.femaleNum.push('0')
        } else if (item.gender === 'male') {
          this.maleNum.push('0')
        }
      })
      console.log(1)
      // Определить профессию
      first.forEach(item => {
        if (item.department === 'Backend') {
          this.backendNum.push('0')
        } else if (item.department === 'Frontend') {
          this.frontendNum.push('0')
        } else if (item.department === 'Hr') {
          this.hrNum.push('0')
        }
      })
      // Определить количество человек в каждом городе без привязки к проф
      first.forEach(item => {
        if (item['address']['city'] === 'Moscow') {
          this.moscowNum.push('0')
        } else if (item['address']['city'] === 'New-York') {
          this.newyorkNum.push('0')
        } else if (item['address']['city'] === 'Voronezh') {
          this.voronezhNum.push('0')
        } else if (item['address']['city'] === 'Spb') {
          this.spbNum.push('0')
        }
      })
      // space
      first.forEach(item => {
        if (item.department === this.department[0]) {
          second.push(item)
          this.peoplesFilter = second
        } else if (this.department[0] === undefined) {
          second.push(item)
          this.peoplesFilter = second
        }
      })
      console.log(2)
      // space
      this.femaleNum = []
      this.maleNum = []
      this.backendNum = []
      this.frontendNum = []
      this.hrNum = []
      this.moscowNum = []
      this.newyorkNum = []
      this.voronezhNum = []
      this.spbNum = []
      // space
      // Определение пола
      second.forEach(item => {
        if (item.gender === 'female') {
          this.femaleNum.push('0')
        } else if (item.gender === 'male') {
          this.maleNum.push('0')
        }
      })
      // space
      // Определить профессию
      second.forEach(item => {
        if (item.department === 'Backend') {
          this.backendNum.push('0')
        } else if (item.department === 'Frontend') {
          this.frontendNum.push('0')
        } else if (item.department === 'Hr') {
          this.hrNum.push('0')
        }
      })
      // Определить количество человек в каждом городе без привязки к проф
      second.forEach(item => {
        if (item['address']['city'] === 'Moscow') {
          this.moscowNum.push('0')
        } else if (item['address']['city'] === 'New-York') {
          this.newyorkNum.push('0')
        } else if (item['address']['city'] === 'Voronezh') {
          this.voronezhNum.push('0')
        } else if (item['address']['city'] === 'Spb') {
          this.spbNum.push('0')
        }
      })
      // space
      second.forEach(item => {
        if (item['address']['city'] === this.address[0]) {
          third.push(item)
          this.peoplesFilter = third
        } else if (this.address[0] === undefined) {
          third.push(item)
          this.peoplesFilter = third
        }
      })
      console.log(3)
      // space
      this.femaleNum = []
      this.maleNum = []
      this.backendNum = []
      this.frontendNum = []
      this.hrNum = []
      this.moscowNum = []
      this.newyorkNum = []
      this.voronezhNum = []
      this.spbNum = []
      // space
      // Определение пола
      third.forEach(item => {
        if (item.gender === 'female') {
          this.femaleNum.push('0')
        } else if (item.gender === 'male') {
          this.maleNum.push('0')
        }
      })
      // space
      console.log(4)
      // Определить профессию
      third.forEach(item => {
        if (item.department === 'Backend') {
          this.backendNum.push('0')
        } else if (item.department === 'Frontend') {
          this.frontendNum.push('0')
        } else if (item.department === 'Hr') {
          this.hrNum.push('0')
        }
      })
      // Определить количество человек в каждом городе без привязки к проф
      third.forEach(item => {
        if (item['address']['city'] === 'Moscow') {
          this.moscowNum.push('0')
        } else if (item['address']['city'] === 'New-York') {
          this.newyorkNum.push('0')
        } else if (item['address']['city'] === 'Voronezh') {
          this.voronezhNum.push('0')
        } else if (item['address']['city'] === 'Spb') {
          this.spbNum.push('0')
        }
      })
    },
    sortName () {
      this.numbName += 1
      if (this.numbName % 2 === 1) {
        this.peoplesFilter.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)
      } else if (this.numbName % 2 === 0) {
        this.peoplesFilter.sort((a, b) => (b.name > a.name) ? 1 : (a.name > b.name) ? -1 : 0)
      }
    },
    sortAge () {
      this.numbAge += 1
      if (this.numbAge % 2 === 1) {
        this.peoplesFilter.sort((a, b) => (a.age > b.age) ? 1 : (b.age > a.age) ? -1 : 0)
      } else if (this.numbAge % 2 === 0) {
        this.peoplesFilter.sort((a, b) => (b.age > a.age) ? 1 : (a.age > b.age) ? -1 : 0)
      }
    },
    sortGender () {
      this.numbGender += 1
      if (this.numbGender % 2 === 1) {
        this.peoplesFilter.sort((a, b) => (a.gender > b.gender) ? 1 : (b.gender > a.gender) ? -1 : 0)
      } else if (this.numbGender % 2 === 0) {
        this.peoplesFilter.sort((a, b) => (b.gender > a.gender) ? 1 : (a.gender > b.gender) ? -1 : 0)
      }
    },
    sortDepartment () {
      this.numbDepartment += 1
      if (this.numbDepartment % 2 === 1) {
        this.peoplesFilter.sort((a, b) => (a.department > b.department) ? 1 : (b.department > a.department) ? -1 : 0)
      } else if (this.numbDepartment % 2 === 0) {
        this.peoplesFilter.sort((a, b) => (b.department > a.department) ? 1 : (a.department > b.department) ? -1 : 0)
      }
    },
    sortAddress () {
      this.numbAddress += 1
      if (this.numbAddress % 2 === 1) {
        this.peoplesFilter.sort((a, b) => (a.address.city > b.address.city) ? 1 : (b.address.city > a.address.city) ? -1 : 0)
      } else if (this.numbAddress % 2 === 0) {
        this.peoplesFilter.sort((a, b) => (b.address.city > a.address.city) ? 1 : (a.address.city > b.address.city) ? -1 : 0)
      }
    }
  },
  created () {
    fetch('https://gist.githubusercontent.com/bunopus/f48fbb06578003fb521c7c1a54fd906a/raw/e5767c1e7f172c6375f064a9441f2edd57a79f15/test_users.json')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        for (let i = 0; i < response.length; i++) {
          this.peoples.push(response[i])
        }
      })
      .then(() => this.filterMale())
  }
}
</script>

<style>
  body{
    margin: 0;
    font-size: 1.5vw;
  }
  .filter{
    width: 100%;
    display: flex;
    margin-left: 12px;
    margin: 0 auto;
    max-width: 1200px;
  }
  .filter__block{
    border: 1px solid black;
    width: 100%;
    margin-left: -1px;
  }
  .table{
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
  }
  #app{
    margin: 0;
  }
  .main-class{
    max-width: 1200px;
    margin: 0 auto;
  }
  table{
    width: 100%;
  }
</style>
