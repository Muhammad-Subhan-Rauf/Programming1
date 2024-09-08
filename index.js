let first_cols = document.getElementsByClassName("first_col")

first_cols = Array.from(first_cols)

for(let i =0; i<first_cols.length; i++){
    if(i%2 != 0){
        first_cols[i].style.backgroundColor = "#C4D5DD"
    }
}