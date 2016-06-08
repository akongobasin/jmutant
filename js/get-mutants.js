var url= 'https://mutant-school.herokuapp.com/api/v1/mutants';

function loadMutants(mutants) {
  $.each(mutants, addMutant);
    }


function addMutant(i, mutant) {
  var li= $('.template')
  .clone()
  .removeClass('template');

  li.find('.mutant-name').text('mutant.mutant_name');
$('#mutantList').append('<li>' + mutant.mutant_name + '</li>');
}

$.get({
  url: url,
  success: loadMutants
});
//get is called first
//loadMutants is called second
//each is called third
//addMutant is called fourth
//append is call fifth
