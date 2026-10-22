import Route from '@ember/routing/route';

export default class MyProjectsRoute extends Route {
    model() {
        return ['FPGA Canny Edge Detection', 'SHA-256 Encryption Hardware'];
    }
}
