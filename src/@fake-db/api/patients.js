import mock from '../mock';
import { data } from '../db/patients';

mock.onGet('/api/patients/list/all-data').reply((config) => {
    console.log(config.filtered);
    const status = config.filtered;
    const dataFiltered = data.patients.filter(patient=> status?.includes(patient.extendedProps.status))
    return[200, dataFiltered]
});


