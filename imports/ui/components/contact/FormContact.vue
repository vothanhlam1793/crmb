<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="name">Tên:</label>
            <input class="form-control" placeholder="Anh A" id="name"
                v-model="name"
            >
        </div>
        <div class="form-group">
            <label for="phone">Điện thoại:</label>
            <input class="form-control" placeholder="09xx xxx xxx" id="phone"
                v-model="phone"
            >
        </div>
        <div class="form-group">
            <label for="address">Địa chỉ:</label>
            <input class="form-control" placeholder="Số 30, đường Y, quận Z" id="address"
                v-model="address"
            >
        </div>
        <div class="form-group text-center">
            <button type="submit" class="btn btn-primary">Tạo mới</button>
        </div>
    </form>
</template>
<script>

export default {
    props: [],
    data(){
        return {
            name: "",
            phone: "",
            address: ""
        }
    },
    methods: {
        handleSubmit(event){
            Meteor.call('contacts.insert', {
                name: this.name,
                phone: this.phone,
                address: this.address
            });
            this.name = "";
            this.phone = "";
            this.address = "";
        }
    },
    meteor(){

    }
}
</script>