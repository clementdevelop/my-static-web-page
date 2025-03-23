<template>
  <div class="contact-form7-contact1 thq-section-padding">
    <div class="contact-form7-max-width thq-section-max-width thq-flex-row">
      <div class="contact-form7-section-title thq-flex-column">
        <span class="thq-body-small">
          <slot name="content2">
            <!--Default content for content2-->
            <div class="contact-form7-fragment5">
              <span class="contact-form7-text24">
                Our team is here to help with any inquiries you may have. Feel
                free to reach out to us via email or phone.
              </span>
            </div>
          </slot>
        </span>
        <div class="contact-form7-content1">
          <h2 class="thq-heading-2">
            <slot name="heading1">
              <!--Default content for heading1-->
              <div class="contact-form7-fragment6">
                <span class="contact-form7-text25">Contact Information</span>
              </div>
            </slot>
          </h2>
          <span class="thq-body-small contact-form7-text12">
            <slot name="content1">
              <!--Default content for content1-->
              <div class="contact-form7-fragment1">
                <span class="contact-form7-text20">
                  Have a question or need assistance?
                </span>
              </div>
            </slot>
          </span>
        </div>
        <div class="contact-form7-content2">
          <div class="contact-form7-row1">
            <svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
              ></path>
            </svg>
            <span class="thq-body-small">
              <slot name="email">
                <!--Default content for email-->
                <div class="contact-form7-fragment2">
                  <span class="contact-form7-text21">Email</span>
                </div>
              </slot>
            </span>
          </div>
          <div class="contact-form7-row2">
            <svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
              ></path>
            </svg>
            <span class="thq-body-small">
              <slot name="phone">
                <!--Default content for phone-->
                <div class="contact-form7-fragment3">
                  <span class="contact-form7-text22">Phone</span>
                </div>
              </slot>
            </span>
          </div>
          <div class="contact-form7-row3">
            <svg viewBox="0 0 1024 1024" class="thq-icon-small">
              <path
                d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"
              ></path>
            </svg>
            <span class="thq-body-small">
              <slot name="address">
                <!--Default content for address-->
                <div class="contact-form7-fragment7">
                  <span class="contact-form7-text26">
                    123 Design Street, Cityville, USA
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
      </div>
      <form class="contact-form7-form thq-flex-column">
        <div class="contact-form7-container1">
          <div class="contact-form7-input1">
            <label for="contact-form-7-first-name" class="thq-body-small">
              First name
            </label>
            <input
              type="text"
              id="contact-form-7-first-name"
              placeholder="First Name"
              class="thq-input"
            />
          </div>
          <div class="contact-form7-input2">
            <label for="contact-form-7-last-name" class="thq-body-small">
              Last name
            </label>
            <input
              type="text"
              id="contact-form-7-last-name"
              placeholder="Last Name"
              class="thq-input"
            />
          </div>
        </div>
        <div class="contact-form7-container2">
          <div class="contact-form7-input3">
            <label for="contact-form-7-email" class="thq-body-small">Email</label>
            <input
              type="email"
              id="contact-form-7-email"
              required="true"
              placeholder="Email"
              class="thq-input"
            />
          </div>
          <div class="contact-form7-input4">
            <label for="contact-form-7-phone" class="thq-body-small">
              Phone Number
            </label>
            <input
              type="tel"
              id="contact-form-7-phone"
              placeholder="Phone Number"
              class="thq-input"
            />
          </div>
        </div>
        <div class="contact-form7-container3">
          <div class="contact-form7-input5">
            <label for="contact-form-7-options" class="thq-body-small">
              Choose one topic
            </label>
            <select
              id="contact-form-7-options"
              placeholder="Select one"
              class="thq-select"
            >
              <option value="Option 1">Customer service</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Finance</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Feature request</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>
        <div class="contact-form7-container4">
          <div class="contact-form7-input6">
            <label for="contact-form-7-message" class="thq-body-small">
              Message
            </label>
            <textarea
              id="contact-form-7-message"
              rows="3"
              placeholder="Enter your message"
              class="thq-input"
            ></textarea>
          </div>
        </div>
        <div class="contact-form7-checkbox1">
          <input
            type="checkbox"
            id="contact-form-7-check"
            checked="true"
            required="true"
            class="thq-checkbox"
          />
          <label for="contact-form-7-check" class="thq-body-small">
            I accept the Terms
          </label>
        </div>
        <button type="submit" class="contact-form7-button thq-button-filled">
          <span class="thq-body-small">
            <slot name="action">
              <!--Default content for action-->
              <div class="contact-form7-fragment4">
                <span class="contact-form7-text23">Contact Us</span>
              </div>
            </slot>
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm7',
  props: {},
}
</script>

<style scoped>
.contact-form7-contact1 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
 
.contact-form7-max-width {
  align-items: flex-start;
}
 
.contact-form7-section-title {
  gap: var(--dl-layout-space-unit);
  width: 40%;
  align-items: flex-start;
}
 
.contact-form7-content1 {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  flex-direction: column;
}
 
.contact-form7-content2 {
  gap: 16px;
  display: flex;
  padding: 8px 0;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact-form7-row1 {
  gap: 16px;
  display: flex;
  align-items: flex-start;
}
 
.contact-form7-row2 {
  gap: 16px;
  display: flex;
  align-items: flex-start;
}
 
.contact-form7-row3 {
  gap: 16px;
  display: flex;
  align-items: flex-start;
}
 
.contact-form7-form {
  gap: var(--dl-layout-space-oneandhalfunits);
  width: 60%;
}
 
.contact-form7-container1 {
  gap: var(--dl-layout-space-unit);
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
 
.contact-form7-input1 {
  gap: var(--dl-layout-space-halfunit);
  width: 50%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact-form7-input2 {
  gap: var(--dl-layout-space-halfunit);
  width: 50%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact-form7-container2 {
  gap: var(--dl-layout-space-unit);
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
 
.contact-form7-input3 {
  gap: var(--dl-layout-space-halfunit);
  width: 50%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact-form7-input4 {
  gap: var(--dl-layout-space-halfunit);
  width: 50%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact-form7-container3 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact-form7-input5 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact-form7-container4 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact-form7-input6 {
  gap: var(--dl-layout-space-halfunit);
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact-form7-checkbox1 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
}
 
.contact-form7-button {
  align-self: flex-start;
}
 
.contact-form7-fragment1 {
  display: contents;
}
 
.contact-form7-text20 {
  display: inline-block;
}
 
.contact-form7-fragment2 {
  display: contents;
}
 
.contact-form7-text21 {
  display: inline-block;
}
 
.contact-form7-fragment3 {
  display: contents;
}
 
.contact-form7-text22 {
  display: inline-block;
}
 
.contact-form7-fragment4 {
  display: contents;
}
 
.contact-form7-text23 {
  display: inline-block;
}
 
.contact-form7-fragment5 {
  display: contents;
}
 
.contact-form7-text24 {
  display: inline-block;
}
 
.contact-form7-fragment6 {
  display: contents;
}
 
.contact-form7-text25 {
  display: inline-block;
}
 
.contact-form7-fragment7 {
  display: contents;
}
 
.contact-form7-text26 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .contact-form7-max-width {
    align-items: flex-start;
    flex-direction: column;
  }
  .contact-form7-section-title {
    width: 100%;
  }
  .contact-form7-form {
    width: 100%;
  }
  .contact-form7-container1 {
    gap: var(--dl-layout-space-twounits);
    width: 100%;
    flex-direction: row;
  }
  .contact-form7-input1 {
    width: 50%;
  }
  .contact-form7-input2 {
    width: 50%;
    flex-direction: column;
  }
  .contact-form7-container2 {
    gap: var(--dl-layout-space-twounits);
    width: 100%;
    flex-direction: row;
  }
  .contact-form7-input3 {
    width: 50%;
  }
  .contact-form7-input4 {
    width: 50%;
  }
  .contact-form7-container3 {
    gap: var(--dl-layout-space-twounits);
    width: 100%;
    flex-direction: row;
  }
  .contact-form7-input5 {
    gap: var(--dl-layout-space-halfunit);
    width: 50%;
    flex-direction: column;
  }
  .contact-form7-container4 {
    gap: var(--dl-layout-space-twounits);
    width: 100%;
    flex-direction: row;
  }
  .contact-form7-checkbox1 {
    align-self: flex-start;
  }
}
 
@media(max-width: 479px) {
  .contact-form7-text12 {
    text-align: center;
  }
  .contact-form7-form {
    padding: var(--dl-layout-space-unit);
  }
  .contact-form7-container1 {
    align-items: stretch;
    flex-direction: column;
  }
  .contact-form7-input1 {
    width: 100%;
  }
  .contact-form7-input2 {
    width: 100%;
  }
  .contact-form7-container2 {
    align-items: stretch;
    flex-direction: column;
  }
  .contact-form7-input3 {
    width: 100%;
  }
  .contact-form7-input4 {
    width: 100%;
  }
}
</style>
