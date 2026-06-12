class ModeloLineal {
    constructor() {
        this.slope = 0;
        this.intercept = 0;
        this.costHistory = [];
        this.X = [];
        this.y = [];
    }

    fit(X, y, learningRate = 0.001, iterations = 5000) {
        this.X = X;
        this.y = y;
        const m = X.length;
        this.slope = 0;
        this.intercept = 0;
        this.costHistory = [];

        for (let iter = 0; iter < iterations; iter++) {
            let gradSlope = 0;
            let gradIntercept = 0;

            for (let i = 0; i < m; i++) {
                const pred = this.slope * X[i] + this.intercept;
                const err = pred - y[i];
                gradSlope += err * X[i];
                gradIntercept += err;
            }

            this.slope -= learningRate * gradSlope / m;
            this.intercept -= learningRate * gradIntercept / m;

            if (iter % 100 === 0) {
                const cost = this.computeCost(X, y);
                this.costHistory.push({ iteration: iter, cost });
            }
        }
    }

    computeCost(X, y) {
        const m = X.length;
        let total = 0;
        for (let i = 0; i < m; i++) {
            const pred = this.slope * X[i] + this.intercept;
            total += (pred - y[i]) ** 2;
        }
        return total / (2 * m);
    }

    predict(X) {
        if (Array.isArray(X)) {
            return X.map(x => this.slope * x + this.intercept);
        }
        return this.slope * X + this.intercept;
    }

    getEquation() {
        return `y = ${this.slope.toFixed(4)}x + ${this.intercept.toFixed(4)}`;
    }

    getRSquared(X, y) {
        const preds = this.predict(X);
        const mean = y.reduce((a, b) => a + b, 0) / y.length;
        const ssRes = y.reduce((sum, yi, i) => sum + (yi - preds[i]) ** 2, 0);
        const ssTot = y.reduce((sum, yi) => sum + (yi - mean) ** 2, 0);
        return 1 - ssRes / ssTot;
    }
}

class ModeloLogistico {
    constructor() {
        this.weights = [0];
        this.bias = 0;
        this.costHistory = [];
        this.X = [];
        this.y = [];
    }

    sigmoid(z) {
        return 1 / (1 + Math.exp(-Math.max(-700, Math.min(700, z))));
    }

    fit(X, y, learningRate = 0.01, iterations = 5000) {
        this.X = X;
        this.y = y;
        const m = X.length;
        this.weights = new Array(X[0].length).fill(0);
        this.bias = 0;
        this.costHistory = [];

        for (let iter = 0; iter < iterations; iter++) {
            let dw = new Array(this.weights.length).fill(0);
            let db = 0;

            for (let i = 0; i < m; i++) {
                let z = this.bias;
                for (let j = 0; j < this.weights.length; j++) {
                    z += this.weights[j] * X[i][j];
                }
                const pred = this.sigmoid(z);
                const err = pred - y[i];

                for (let j = 0; j < this.weights.length; j++) {
                    dw[j] += err * X[i][j];
                }
                db += err;
            }

            for (let j = 0; j < this.weights.length; j++) {
                this.weights[j] -= learningRate * dw[j] / m;
            }
            this.bias -= learningRate * db / m;

            if (iter % 100 === 0) {
                const cost = this.computeCost(X, y);
                this.costHistory.push({ iteration: iter, cost });
            }
        }
    }

    computeCost(X, y) {
        const m = X.length;
        let total = 0;
        for (let i = 0; i < m; i++) {
            let z = this.bias;
            for (let j = 0; j < this.weights.length; j++) {
                z += this.weights[j] * X[i][j];
            }
            const pred = this.sigmoid(z);
            const epsilon = 1e-15;
            total += -y[i] * Math.log(pred + epsilon) - (1 - y[i]) * Math.log(1 - pred + epsilon);
        }
        return total / m;
    }

    predict(X) {
        if (!Array.isArray(X[0])) {
            X = [X];
        }
        return X.map(x => {
            let z = this.bias;
            for (let j = 0; j < this.weights.length; j++) {
                z += this.weights[j] * x[j];
            }
            return this.sigmoid(z) >= 0.5 ? 1 : 0;
        });
    }

    predictProbability(X) {
        if (!Array.isArray(X[0])) {
            X = [X];
        }
        return X.map(x => {
            let z = this.bias;
            for (let j = 0; j < this.weights.length; j++) {
                z += this.weights[j] * x[j];
            }
            return this.sigmoid(z);
        });
    }

    predictSingle(x) {
        let z = this.bias;
        for (let j = 0; j < this.weights.length; j++) {
            z += this.weights[j] * x[j];
        }
        const prob = this.sigmoid(z);
        return {
            probabilidad: prob,
            prediccion: prob >= 0.5 ? 1 : 0,
            label: prob >= 0.5 ? 'Aprobado' : 'Reprobado'
        };
    }

    getAccuracy(X, y) {
        const preds = this.predict(X);
        let correct = 0;
        for (let i = 0; i < y.length; i++) {
            if (preds[i] === y[i]) correct++;
        }
        return correct / y.length;
    }

    getConfusionMatrix(X, y) {
        const preds = this.predict(X);
        let tp = 0, fp = 0, tn = 0, fn = 0;
        for (let i = 0; i < y.length; i++) {
            if (preds[i] === 1 && y[i] === 1) tp++;
            else if (preds[i] === 1 && y[i] === 0) fp++;
            else if (preds[i] === 0 && y[i] === 0) tn++;
            else if (preds[i] === 0 && y[i] === 1) fn++;
        }
        return { tp, fp, tn, fn };
    }

    getPrecision(X, y) {
        const { tp, fp } = this.getConfusionMatrix(X, y);
        return tp + fp === 0 ? 0 : tp / (tp + fp);
    }

    getRecall(X, y) {
        const { tp, fn } = this.getConfusionMatrix(X, y);
        return tp + fn === 0 ? 0 : tp / (tp + fn);
    }

    getF1Score(X, y) {
        const p = this.getPrecision(X, y);
        const r = this.getRecall(X, y);
        return p + r === 0 ? 0 : 2 * p * r / (p + r);
    }
}

class GestorDatos {
    constructor() {
        this.datos = [];
    }

    cargarCSV(textoCSV) {
        const lineas = textoCSV.trim().split('\n');
        const headers = lineas[0].split(',').map(h => h.trim());
        this.datos = [];

        for (let i = 1; i < lineas.length; i++) {
            const valores = lineas[i].split(',').map(v => v.trim());
            if (valores.length >= 4) {
                this.datos.push({
                    estudiante: valores[0],
                    horas: parseFloat(valores[1]),
                    calificacion: parseFloat(valores[2]),
                    aprobado: parseInt(valores[3])
                });
            }
        }
        return this.datos;
    }

    agregarDato(estudiante, horas, calificacion) {
        const aprobado = calificacion >= 3.0 ? 1 : 0;
        this.datos.push({ estudiante, horas, calificacion, aprobado });
        return this.datos;
    }

    eliminarDato(index) {
        this.datos.splice(index, 1);
    }

    limpiarDatos() {
        this.datos = [];
    }

    getCaracteristicas() {
        return this.datos.map(d => [d.horas]);
    }

    getObjetivosRegresion() {
        return this.datos.map(d => d.calificacion);
    }

    getObjetivosClasificacion() {
        return this.datos.map(d => d.aprobado);
    }

    getNombres() {
        return this.datos.map(d => d.estudiante);
    }

    getHorasArray() {
        return this.datos.map(d => d.horas);
    }

    getCalificacionesArray() {
        return this.datos.map(d => d.calificacion);
    }

    getAprobadosArray() {
        return this.datos.map(d => d.aprobado);
    }

    cantidad() {
        return this.datos.length;
    }

    splitData(trainRatio = 0.8) {
        const shuffled = [...this.datos];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        const splitIdx = Math.floor(shuffled.length * trainRatio);
        const train = shuffled.slice(0, splitIdx);
        const test = shuffled.slice(splitIdx);

        const extract = (data) => ({
            nombres: data.map(d => d.estudiante),
            horas: data.map(d => d.horas),
            X: data.map(d => [d.horas]),
            yReg: data.map(d => d.calificacion),
            yCls: data.map(d => d.aprobado)
        });

        return {
            train: extract(train),
            test: extract(test),
            trainRatio: train.length / shuffled.length,
            testRatio: test.length / shuffled.length
        };
    }
}
