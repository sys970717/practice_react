import ApiUtilsTest from "@/utils/ApiUtilsTest";

export default {
    list() {
        return ApiUtilsTest.get('/faq');
    }
}