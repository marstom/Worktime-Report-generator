
const ent ={ 
    "entrys": {
      "1": {
	"description": "MY1 - workon calcualtor",
	"time": "1:30"
      },
      "2": {
	"description": "MY2 - doing calc",
	"time": "1:15"
      },
      "3": {
	"description": "MY3 - music",
	"time": "1:15"
      }
    }
  }


let arr = ['a', 'b', 'c', 'd', ]



console.log(arr.forEach(e => e))

console.log(arr.map(e => e+'x'))

console.log(arr)
console.log(ent)



const m = Object.entries(ent.entrys)
console.log(m.map(e => {
    return {
	id:e[0],
	description: e[1].description,
	time: e[1].time,
    }
}))
