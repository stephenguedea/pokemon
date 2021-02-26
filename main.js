// $.get("db.json", {
//
// })
//     .done(function (data) {
//
//
//         console.log(data);
//
//         var id = data.id;
//         var name = data.name;
//
//         var character = `
//             <div class="col-3">
//                 <div class="card">
//                     <div class="card-header">
//                         ${name}
//                     </div>
//                     <p>${id}</p>
//                 </div>
//             </div>
//         `;
//
//         $("#insertPokemons").append(character);
//     });

var pokemonLimit = 151;

    $.get("db.json", {
    }).done(function (data) {
        console.log(data);
        console.log(data.pokemon);
        console.log(data.pokemon.name);


        for (var i = 0; i <= 151; i++) {
            console.log(data.pokemon[i].name);
            // var id = data.pokemon[i].id;
            // var name = data.pokemon[i].name;
            // var image = data.pokemon[i].img;
            // var type = data.pokemon[i].type;
            var character = `
                <div class="col-3 py-3">
                    <div class="card">
                        <div class="card-header">
                            ${data.pokemon[i].name}
                        </div>
                        <img src="${data.pokemon[i].img}" alt="">
                    </div>
                </div>
            `;

            if (data.pokemon[i].name === 'bulbasaur') {
                document.getElementsByClassName("card").item(i).style.backgroundColor = 'green';
            }

            $("#insertPokemons").append(character);

            // console.log(data.pokemon[i].name);
        }

        // var id = data.pokemon;
        // var name = data.name;
        // var image = data.img;
        //
        // var character = `
        //     <div class="col-3">
        //         <div class="card">
        //             <div class="card-header">
        //                 ${name}
        //             </div>
        //             <img src="${image}" alt="">
        //             <p>${id}</p>
        //         </div>
        //     </div>
        // `;
        //
        // $("#insertPokemons").append(character);
    }, "json");




