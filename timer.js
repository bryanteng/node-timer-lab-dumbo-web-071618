let arg = process.argv[process.argv.length-1]
var n = arg[arg.length-1] == "s" ? parseInt(arg) : parseInt(arg)*60
var interval = setInterval(()=>{
        if(n){
            n-=1
            console.log(`Left: ${n}s`)
        }else{
            clearInterval(interval)
            process.exit()
        }
  }, 1000)