import makeRequest from './helpers/makeRequest';

function all(){
    return makeRequest('complex/all.php');
}

export { all };