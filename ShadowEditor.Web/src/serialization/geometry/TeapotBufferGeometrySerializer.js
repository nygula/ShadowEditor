import BaseSerializer from '../BaseSerializer';
import BufferGeometrySerializer from './BufferGeometrySerializer';

/**
 * TeapotBufferGeometrySerializer
 * @author tengge / https://github.com/tengge1
 */
function TeapotBufferGeometrySerializer() {
    BaseSerializer.call(this);
}

TeapotBufferGeometrySerializer.prototype = Object.create(BaseSerializer.prototype);
TeapotBufferGeometrySerializer.prototype.constructor = TeapotBufferGeometrySerializer;

TeapotBufferGeometrySerializer.prototype.toJSON = function (obj) {
    return BufferGeometrySerializer.prototype.toJSON.call(this, obj);
};

TeapotBufferGeometrySerializer.prototype.fromJSON = function (json, parent) {
    var obj = parent === undefined ? new THREE.TeapotBufferGeometry(
        json.parameters.size,
        json.parameters.segments,
        json.parameters.bottom,
        json.parameters.lid,
        json.parameters.body,
        json.parameters.fitLid,
        json.parameters.blinn
    ) : parent;

    BufferGeometrySerializer.prototype.fromJSON.call(this, json, obj);

    return obj;
};

export default TeapotBufferGeometrySerializer;