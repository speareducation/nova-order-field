<template>
  <div class="flex items-center">
    <div
      v-if="!field.last"
      @click.stop="reorderResource('down')"
      class="cursor-pointer text-70 hover:text-primary mr-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="22"
        width="22"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="8 12 12 16 16 12" />
        <line x1="12" x2="12" y1="8" y2="16" />
      </svg>
    </div>
    <div
      v-if="!field.first"
      @click.stop="reorderResource('up')"
      class="cursor-pointer text-70 hover:text-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="22"
        width="22"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="16 12 12 8 8 12" />
        <line x1="12" x2="12" y1="16" y2="8" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ['resourceName', 'resource', 'field', 'viaResource', 'viaResourceId', 'viaRelationship'],
  methods: {
    async reorderResource(direction) {
      await Nova.request().post(`/nova-vendor/Spear/nova-order-field/${this.resourceName}`, {
        direction: direction,
        resource: this.resourceName,
        resourceId: this.resource.id.value,
        viaResource: this.field.viaResource || null,
        viaResourceId: this.field.viaResourceId || null,
        viaRelationship: this.field.viaRelationship || null
      });

      Nova.$toasted.show(this.__("The new order has been set!"), {
        type: "success"
      });

      Nova.$emit('refresh-resources');
    }
  }
};
</script>
